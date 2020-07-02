using System;
using System.Collections.Generic;
using System.Text;

namespace Test_App.Repo.Interfaces.DTO
{
    interface ISortDto
    {
        string SortBy { get; set; }
        string Order { get; set; }
    }
}
