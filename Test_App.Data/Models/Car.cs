using Test_App.Data.Models.Base;

namespace Test_App.Data.Models
{
    public class Car : EntityBase
    {
        public virtual string Make { get; set; }
        public virtual string Model { get; set; }
        public virtual string Color { get; set; }
        public virtual float EngineCapacity { get; set; }
        public virtual short Year { get; set; }
        public virtual float Price { get; set; }
        public virtual string ImageUrl { get; set; }
        public virtual string Description { get; set; }
    }
}
