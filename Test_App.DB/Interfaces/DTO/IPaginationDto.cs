using System;
using System.Collections.Generic;
using System.Text;

namespace Test_App.Repo.Interfaces.DTO
{
    public interface IPaginationDto
    {
        int Page { get; set; }
        int Size { get; set; }
    }
}
