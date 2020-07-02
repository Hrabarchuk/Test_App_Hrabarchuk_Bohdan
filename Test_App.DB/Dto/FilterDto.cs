using Test_App.Repo.Interfaces.DTO;

namespace Test_App.Repo.Dto
{
    public class FilterDto : IFilterDto
    {
        public string Make { get; set; }
        public string Model { get; set; }
        public string Color { get; set; }
        public short Year { get; set; }
    }
}
