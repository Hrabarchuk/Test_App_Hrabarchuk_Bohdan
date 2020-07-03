using System;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Test_App.Core.Interfaces;
using Test_App.Data.Models;
using Test_App.Repo.Dto;
using Test_App.WebApi.ViewModels.Car;

namespace Test_App.WebApi.Controllers.Api
{
    /// <summary>
    ///  Api controller for cars
    /// </summary>
    [Route("api/[controller]")]
    [ApiController]
    public class CarController : ControllerBase
    {
        private readonly ICarService _carService;

        /// <summary>
        /// Constructor for initialize CarController         
        /// </summary>
        /// <param name="carService">Service for work with car</param>
        public CarController(ICarService carService)
        {
            _carService = carService ?? throw new ArgumentNullException(nameof(carService));
        }


        /// <summary>
        /// Creates new car
        /// </summary>
        /// <remarks>
        /// Sample request:
        ///
        ///     POST /CreateCar
        ///     {
        ///          "make": "BMW",
        ///          "model": "I8",
        ///          "color": "Black",
        ///          "engineCapacity": 1.5,
        ///          "year": 2019,
        ///          "price": 165000,
        ///          "imageUrl": "photo_2020-01-08_09-28-02.jpg",
        ///          "description": "Sprint from 0 to 100 kilometers per hour overcomes the coupe in just 4.4 seconds.
        ///                          The maximum speed is electronically limited to 250 km / h."
        ///     }
        ///
        /// </remarks>
        /// <param name="model">Car's model</param>
        /// <returns>Returns the newly created car id</returns>
        /// <response code="201">Returns the newly created car id</response>
        /// <response code="400">If model is not valid</response>
        /// <response code="500">Internal server error</response>
        [HttpPost("CreateCar")]
        public async Task<IActionResult> CreateCar([FromBody] CarViewModel model)
        {
            try
            {
                if (model == null)
                {
                    throw new ArgumentNullException(nameof(model));
                }

                var car = Mapper.Map<CarDto>(model);
                var createdCar = await _carService.CreateCar(car);
                return Ok(createdCar);
            }
            catch (Exception exception)
            {
                // todo: add logging 
                return StatusCode(500);
            }
        }


        /// <summary>
        /// Gets all cars
        /// </summary>
        /// <remarks>
        /// Sample request:
        ///
        ///     POST /GetAllCar
        ///     {
        ///     }
        ///
        /// </remarks>
        /// <returns>Returns the collection of car</returns>
        /// <response code="200">Returns the collection of car</response>
        /// <response code="500">Internal server error</response>
        [HttpPost("GetAllCar")]
        public async Task<IActionResult> GetAllCar()
        {
            try
            {
                 var allCars = await _carService.GetAllCars().ConfigureAwait(false);
                 return Ok(allCars);
            }
            catch (Exception exception)
            {
                // todo: add logging 
                return StatusCode(500);
            }

           
        }


        /// <summary>
        /// Deletes car by id 
        /// </summary>
        /// <param name="id">Car`s id</param>
        /// <remarks>
        /// Sample request:
        ///
        ///     Delete /DeleteCar
        ///     {
        ///         "id": 1,
        ///     }
        ///
        /// </remarks>
        /// <returns>Returns id of deleted car</returns>
        /// <response code="204">Returns id of deleted car</response>
        /// <response code="500">Internal server error</response>
        [HttpDelete("DeleteCar")]
        public async Task<IActionResult> DeleteCar(int id)
        {
            try
            {
                await _carService.DeleteCar(id).ConfigureAwait(false);
                return NoContent();

            }
            catch (Exception exception)
            {
                // todo: add logging 
                return StatusCode(500);
            }
        }


        /// <summary>
        /// Gets car by id 
        /// </summary>
        /// <param name="id">Car's id </param>
        /// <returns>Returns the found car</returns>
        /// <response code="200">Returns the found car</response>
        /// <response code="500">Internal server error</response>
        [HttpPost("GetCarById")]
        public async Task<IActionResult> GetCarById(int id)
        {
            try
            {
                var car = await _carService.GetCarById(id).ConfigureAwait(false);
                return Ok(car);

            }
            catch (Exception exception)
            {
                // todo: add logging 
                return StatusCode(500);
            } 
        }


        /// <summary>
        /// Updates car
        /// </summary>
        /// <remarks>
        /// Sample request:
        ///
        ///     POST /CreateCar
        ///     {
        ///          "id": 5
        ///          "make": "BMW",
        ///          "model": "I8",
        ///          "color": "Black",
        ///          "engineCapacity": 1.5,
        ///          "year": 2019,
        ///          "price": 165000,
        ///          "imageUrl": "photo_2020-01-08_09-28-02.jpg",
        ///          "description": "Sprint from 0 to 100 kilometers per hour overcomes the coupe in just 4.4 seconds.
        ///                          The maximum speed is electronically limited to 250 km / h."
        ///     }
        ///
        /// </remarks>
        /// <param name="model">Car's model</param>
        /// <returns>Returns the updated car id</returns>
        /// <response code="200">Returns the updated car id</response>
        /// <response code="400">If model is not valid</response>
        /// <response code="500">Internal server error</response>
        [HttpPost("UpdateCar")]
        public async Task<IActionResult> UpdateCar(CarDto model)
        {
            try
            {
                await _carService.UpdateCar(model).ConfigureAwait(false);
                return Ok(model.Id);
            }
            catch (Exception exception)
            {
                // todo: add logging 
                return StatusCode(500);
            }
        }
        /// <summary>
        /// Car Filter
        /// </summary>
        /// <remarks>
        /// Sample request:
        ///
        ///     POST /CreateCar
        ///     {
        ///         "filter": {
        ///             "make": "Mazda",
        ///             "model": "",
        ///             "color": "Black",
        ///             "year": 0
        ///         },
        ///         "sort": {
        ///             "sortBy": "",
        ///             "order": ""
        ///         },
        ///         "pagination": {
        ///             "page": 0
        ///             "size": 5
        ///         }
        ///     }
        /// </remarks>
        /// <param name="carsModule">Get cars module</param>
        /// <returns>Returns filtered and sorted collection car</returns>
        /// <response code="200">Returns filtered and sorted collection car</response>
        /// <response code="500">Internal server error</response>
        [HttpPost("CarFiltering")]
        public async Task<IActionResult> CarFiltering(GetCarsModuleViewModule carsModule)
        {
            try
            {
                var filter = Mapper.Map<GetCarModuleDto>(carsModule);
                var cars = await _carService.CarFiltering(filter).ConfigureAwait(false);
                return Ok(cars);
            }
            catch (Exception exception)
            {
                // todo: add logging 
                return StatusCode(500);
            }
        }
    }
}