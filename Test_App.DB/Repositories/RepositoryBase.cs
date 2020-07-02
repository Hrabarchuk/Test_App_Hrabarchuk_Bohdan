using NHibernate;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Test_App.Data.Models.Base;
using Test_App.Repo.Helper;
using Test_App.Repo.Interfaces;
using NHibernate.Linq;

namespace Test_App.Repo.Repositories
{
    public class RepositoryBase<T> : IRepository<T>, IAsyncRepository<T>, IDisposable where T : EntityBase
    {
        protected ISession Session;
        protected ITransaction Transaction;
        public RepositoryBase()
        {
            Session = NHibernateHelper.OpenSession();
        }
        public RepositoryBase(ISession session)
        {
            Session = session;
        }
        public void BeginTransaction()
        {
            Transaction = Session.BeginTransaction();
        }
        public void CommitTransaction()
        {
            Transaction.Commit();
            CloseTransaction();
        }
        public void RollbackTransaction()
        {
            Transaction.Rollback();
            CloseTransaction();
            CloseSession();
        }
        private void CloseTransaction()
        {
            Transaction.Dispose();
            Transaction = null;
        }
        private void CloseSession()
        {
            Session.Close();
            Session.Dispose();
            Session = null;
        }


        public void Create(T item)
        {
            Session.Save(item);
        }

        public async Task<T> CreateAsync(T item)
        {
            await Session.SaveAsync(item);
            return item;
        }

        public void Delete(int id)
        {
            var toDelete = Session.Get<T>(id);
            Session.Delete(toDelete);
        }

        public async Task DeleteAsync(int id)
        {
            var toDelete = Session.Get<T>(id);
            await Session.DeleteAsync(toDelete);

        }

        public T GetById(int id)
        {
            return Session.Get<T>(id);
        }

        public async Task<T> GetByIdAsync(int id)
        {

            return await Session.GetAsync<T>(id);
        }

        public void Update(T item)
        {
            Session.Update(item);
        }

        public async Task UpdateAsync(T item)
        {
            await Session.UpdateAsync(item);
        }

        public void Dispose()
        {
            if (Transaction != null)
            {
                CommitTransaction();
            }
            if (Session != null)
            {
                Session.Flush();
                CloseSession();
            }
        }

        public async Task<List<T>> GetAllAsync()
        {
            return await Session.Query<T>().ToListAsync();
        }
    }
}
