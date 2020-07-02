using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Test_App.WebApi.ViewModels.Car
{
    public class GetCarsModuleViewModule
    {
        public FilterViewModel Filter { get; set; }
        public SortViewModel Sort { get; set; }
        public PaginationViewModel Pagination { get; set; }
    }
}
