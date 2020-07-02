namespace Test_App.Repo.Interfaces.DTO
{
    public interface ICarDto
    {
        
        string Make { get; set; }
        string Model { get; set; }
        string Color { get; set; }
        float EngineCapacity { get; set; }
        short Year { get; set; }
        float Price { get; set; }
        string ImageUrl { get; set; }
        string Description { get; set; }
    }
}
