Create database CarsWorld
go
use CarsWorld
go
CREATE TABLE [dbo].[Car](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Make] [nvarchar](50) NOT NULL,
	[Model] [nvarchar](50) NOT NULL,
	[Color] [nvarchar](50) NOT NULL,
	[EngineCapacity] [float] NOT NULL,
	[Year] [smallint] NOT NULL,
	[Price] [float] NOT NULL,
	[ImageUrl] [nvarchar](50) NOT NULL,
	[Description] [nvarchar](250) NOT NULL,
 CONSTRAINT [PK_Cars] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)); 

INSERT INTO Car (Make, Model, Color, EngineCapacity, Year, Price, ImageUrl, Description)
VALUES ('Aston Martin', 'DBS Superleggera', 'Black' , 4.0 , 2020 , 310000 , 'photo_2019-10-14_12-53-14.jpg' , 'test description' ),
	('Aston Martin', 'DBX', 'Red' , 2.0 , 2019 , 210000 , 'photo_2019-10-14_12-53-14.jpg' , 'test description' ),
	('Mercedes Benz', 's600', 'Black' , 5.0 , 2020 , 100000 , 'photo_2019-10-14_12-53-14.jpg' , 'test description' ),
	('Mercedes Benz', 'W124', 'red' , 3.0 , 1991 , 40000 , 'photo_2019-10-14_12-53-14.jpg' , 'test description' ),
	('Mercedes Benz', 'w140', 'Black' , 4.0 , 2000 , 70000 , 'photo_2019-10-14_12-53-14.jpg' , 'test description' ),
	('Audi', 'A6', 'Gray' , 4.0 , 2015 , 39000 , 'photo_2019-10-14_12-53-14.jpg' , 'test description' ),
	('Audi', 'A4', 'Black' , 4.0 , 2010 , 10000 , 'photo_2019-10-14_12-53-14.jpg' , 'test description' ),
	('Audi', 'A3', 'Black' , 4.0 , 2005 , 7000 , 'photo_2019-10-14_12-53-14.jpg' , 'test description' ),
	('Ford', 'F-450', 'Black' , 5.4 , 2020 , 310000 , 'photo_2019-10-14_12-53-14.jpg' , 'test description' ),
	('Ford', 'F-350', 'Black' , 5.0 , 2007 , 310000 , 'photo_2019-10-14_12-53-14.jpg' , 'test description' ),
	('Ford', 'F-250', 'Black' , 4.5 , 2004 , 310000 , 'photo_2019-10-14_12-53-14.jpg' , 'test description' ),
	('Ford', 'F-150', 'Black' , 4.0 , 2001 , 310000 , 'photo_2019-10-14_12-53-14.jpg' , 'test description' ),
	('Bmw', 'X-2', 'Black' , 3.3 , 2015 , 310000 , 'photo_2019-10-14_12-53-14.jpg' , 'test description' ),
	('Bmw', 'X-1', 'Black' , 3.0 , 2008, 310000 , 'photo_2019-10-14_12-53-14.jpg' , 'test description' );