using Test_App.Data.Models.Base;

namespace Test_App.Repo.Interfaces
{
    public interface IRepository<T> where T : EntityBase
    {
        T GetById(int id);
        void Create(T item);
        void Update(T item);
        void Delete(int id);
    }
}
