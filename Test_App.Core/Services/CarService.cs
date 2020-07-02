using AutoMapper;
using System.Collections.Generic;
using System.Threading.Tasks;
using Test_App.Core.Interfaces;
using Test_App.Data.Models;
using Test_App.Repo.Dto;
using Test_App.Repo.Interfaces.Repositories;
using Test_App.Repo.Models;

namespace Test_App.Core.Services
{
    public class CarService : ICarService
    {
        private readonly ICarRepository _carRepository;
        public CarService(ICarRepository carRepository)
        {
            _carRepository = carRepository;
        }

        public async Task<GetManyResponse<List<Car>>> CarFiltering(GetCarModuleDto model)
        {
            var filter = Mapper.Map<GetCarsModule>(model);
            return await _carRepository.GetManyAsync(filter).ConfigureAwait(false);
        }

        public async Task<Car> CreateCar(CarDto model)
        {
            var car = Mapper.Map<Car>(model);
            return await _carRepository.CreateAsync(car).ConfigureAwait(false);
        }

        public async Task DeleteCar(int id)
        {
            await _carRepository.DeleteAsync(id).ConfigureAwait(false);
        }

        public async Task<List<Car>> GetAllCars()
        {
            return await _carRepository.GetAllAsync().ConfigureAwait(false);
        }

        public async Task<Car> GetCarById(int id)
        {
            return await _carRepository.GetByIdAsync(id).ConfigureAwait(false);
        }

        public async Task<int> UpdateCar(CarDto model)
        {
            var car = Mapper.Map<Car>(model); 
            await _carRepository.UpdateAsync(car).ConfigureAwait(false);
            return car.Id;
        }
    }
}
