using FluentNHibernate.Cfg;
using NHibernate;
using Test_App.Data.Models;

namespace Test_App.Repo.Helper
{
    public static class NHibernateHelper
    {
        private static ISessionFactory _sessionFactory;

        private static ISessionFactory SessionFactory
        {
            get
            {
                return _sessionFactory ??= Fluently.Configure()
                    .Mappings(m => m.FluentMappings.AddFromAssemblyOf<Car>())
                    .BuildSessionFactory();
            }
        }

        public static ISession OpenSession()
        {
            return SessionFactory.OpenSession();
        }

    }
}
