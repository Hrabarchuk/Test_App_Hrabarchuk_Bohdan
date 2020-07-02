using NHibernate.Linq;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Test_App.Data.Models;
using Test_App.Repo.Interfaces.Repositories;
using Test_App.Repo.Models;

namespace Test_App.Repo.Repositories
{
    public class CarRepository : RepositoryBase<Car>, ICarRepository
    {
        public async Task<GetManyResponse<List<Car>>> GetManyAsync(GetCarsModule carsModule)
        {
            var query = Session.Query<Car>();

           
            if (carsModule.Filter.Make != null)
            {
                query = query.Where(x => x.Make.ToUpper().Contains(carsModule.Filter.Make.ToUpper()));
            }

            if (carsModule.Filter.Color != null)
            {
                query = query.Where(x => x.Color.ToUpper().Contains(carsModule.Filter.Color.ToUpper()));
            }

            if (carsModule.Filter.Model != null)
            {
                query = query.Where(x => x.Model.ToUpper().Contains(carsModule.Filter.Model.ToUpper()));
            }

            if (carsModule.Filter.Year > 0)
            {
                query = query.Where(x => x.Year == carsModule.Filter.Year);
            }


            if (carsModule.Sort.Order != null)
            {
                switch (carsModule.Sort.SortBy)
                {
                    case "model":
                        query = carsModule.Sort.Order == "descend"
                            ? query.OrderByDescending(x => x.Model)
                            : query.OrderBy(x => x.Model);
                        break;
                    case "price":
                        query = carsModule.Sort.Order == "descend"
                            ? query.OrderByDescending(x => x.Price)
                            : query.OrderBy(x => x.Price);
                        break;
                    case "year":
                        query = carsModule.Sort.Order == "descend"
                            ? query.OrderByDescending(x => x.Year)
                            : query.OrderBy(x => x.Year);
                        break;
                }
            }

            var totalCount = query.Count();

            var skip = carsModule.Pagination.Size * (carsModule.Pagination.Page - 1);
            query = query.Skip(skip).Take(carsModule.Pagination.Size);

            return new GetManyResponse<List<Car>>(
                await query.ToListAsync(),
                totalCount);
        }
    }
}
