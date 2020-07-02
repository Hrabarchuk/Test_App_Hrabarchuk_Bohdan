using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Test_App.WebApi.ViewModels.Car
{
    public class FilterViewModel
    {
        public string Make { get; set; }
        public string Model { get; set; }
        public string Color { get; set; }
        public short Year { get; set; }
    }
}
