using System.ComponentModel.DataAnnotations;

namespace Test_App.WebApi.ViewModels.Car
{
    public class CarViewModel
    {
        
        //[Required]
        //[MinLength(2)]
        //[MaxLength(50)]
        public string Make { get; set; }

        //[Required]
        //[MinLength(1)]
        //[MaxLength(50)]
        public string Model { get; set; }

        //[Required]
        //[MinLength(3)]
        //[MaxLength(50)]
        public string Color { get; set; }

        //[Range(0.2, 10)]
        public float EngineCapacity { get; set; }

        //[Range(1900, 2100)]
        public short Year { get; set; }

        //[Range(0, float.MaxValue)]
        public float Price { get; set; }

        //[Required]
        public string ImageUrl { get; set; }

        //[MaxLength(250)]
        public string Description { get; set; }
    }
}
