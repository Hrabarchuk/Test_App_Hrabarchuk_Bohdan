using System;
using System.Collections.Generic;
using System.Text;

namespace Test_App.Repo.Interfaces.DTO
{
    public interface IFilterDto
    {
        string Make { get; set; }
        string Model { get; set; }
        string Color { get; set; }
        short Year { get; set; }
    }
}
