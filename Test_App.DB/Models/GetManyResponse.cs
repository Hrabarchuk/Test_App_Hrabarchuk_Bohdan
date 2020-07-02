namespace Test_App.Repo.Models
{
    public class GetManyResponse<T>
    {
        public T Data { get; }
        public int TotalCount { get; }

        public GetManyResponse(T data, int totalCount)
        {
            Data = data;
            TotalCount = totalCount;
        }
    }
}
