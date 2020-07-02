using FluentNHibernate.Mapping;
using Test_App.Data.Models;

namespace Test_App.Data.Mapping
{
    public class CarMap : ClassMap<Car>
    {
        public CarMap()
        {
            Table("Car");

            Id(x => x.Id, "Id").GeneratedBy.Identity().UnsavedValue(0);

            Map(x => x.Make);
            Map(x => x.Model);
            Map(x => x.Color);
            Map(x => x.EngineCapacity);
            Map(x => x.Year);
            Map(x => x.Price);
            Map(x => x.ImageUrl);
            Map(x => x.Description);
        }
    }
}
