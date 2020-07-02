using System.Collections.Generic;
using System.Threading.Tasks;
using Test_App.Data.Models.Base;

namespace Test_App.Repo.Interfaces
{
    public interface IAsyncRepository<T> where T : EntityBase
    {
        Task<T> GetByIdAsync(int Id);
        Task<T> CreateAsync(T item);
        Task UpdateAsync(T item);
        Task DeleteAsync(int id);
        Task<List<T>> GetAllAsync();


    }
}
