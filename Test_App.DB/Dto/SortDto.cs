using Test_App.Repo.Interfaces.DTO;

namespace Test_App.Repo.Dto
{
    public class SortDto : ISortDto
    {
        public string SortBy { get; set; }
        public string Order { get; set; }
    }
}
