using Test_App.Repo.Interfaces.DTO;

namespace Test_App.Repo.Dto
{
    public class PaginationDto : IPaginationDto
    {
        public int Page { get; set; }
        public int Size { get; set; }
    }
}
