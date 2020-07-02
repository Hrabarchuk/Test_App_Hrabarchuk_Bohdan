using Test_App.Repo.Interfaces.DTO;

namespace Test_App.Repo.Dto
{
    public class GetCarModuleDto : IGetCarModuleDto
    {
        public FilterDto Filter { get; set; }
        public SortDto Sort { get; set; }
        public PaginationDto Pagination { get; set; }
    }
}
