using System;
using System.Collections.Generic;
using System.Text;
using Test_App.Repo.Dto;

namespace Test_App.Repo.Interfaces.DTO
{
    public interface IGetCarModuleDto
    {
        FilterDto Filter { get; set; }
        SortDto Sort { get; set; }
        PaginationDto Pagination { get; set; }
    }
}
