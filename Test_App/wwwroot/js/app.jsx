// import 'antd/dist/antd.css'

import React from 'react';

class Car extends React.Component{
 
  constructor(props){
      super(props);
      this.state = {data: props.car};
      this.state = { id: this.props.car.id ,make: this.props.car.make, 
        model: this.props.car.model ,
         color: this.props.car.color ,
          engineCapacity: this.props.car.engineCapacity ,
           year: this.props.car.year ,
            price: this.props.car.price ,
             imageUrl: this.props.car.imageUrl ,
              description: this.props.car.description};
      this.onClickEdit = this.onClickEdit.bind(this);
      this.onClick = this.onClick.bind(this);
      this.onMakeChange = this.onMakeChange.bind(this);
      this.onColorChange = this.onColorChange.bind(this);
      this.onEngineCapacityChange = this.onEngineCapacityChange.bind(this);
      this.onYearChange = this.onYearChange.bind(this);
      this.onImageUrlChange = this.onImageUrlChange.bind(this);
      this.onDescriptionChange = this.onDescriptionChange.bind(this);
  }
  onClick(e){
      this.props.onRemove(this.state.data);
  }
  onMakeChange = (e) => {
      this.setState({make: e.target.value});
  }
  onModelChange = (e) => {
      this.setState({model: e.target.value});
  }
  onColorChange = (e) => {
      this.setState({color: e.target.value});
  }
  onEngineCapacityChange = (e) => {
      this.setState({engineCapacity: e.target.value});
  }
  onYearChange = (e) => {
      this.setState({year: e.target.value}); 
  }
  onPriceChange = (e) => {
      this.setState({price: e.target.value}); 
  }
  onImageUrlChange = (e) => {
      this.setState({imageUrl: e.target.value});
  }
  onDescriptionChange = (e) => {
      this.setState({description: e.target.value});
  }
  onClickEdit(e){ 
    e.preventDefault();
    var carId = this.state.id;
    var carMake = this.state.make;
    var carModel = this.state.model;
    var carColor = this.state.color;
    var carEngineCapacity = this.state.engineCapacity;
    var carYear = this.state.year;
    var carPrice = this.state.price;
    var carImageUrl = this.state.imageUrl;
    var carDescription = this.state.description;
    if (!carMake || !carModel || !carColor || carEngineCapacity <= 0.2 || carYear <= 1900 && carYear > 2020 
        || carPrice < 0 || !carImageUrl) {
        return;
    }
    this.props.onEdit({ id: parseInt(carId) , make: carMake, model: carModel , color: carColor , engineCapacity: parseInt(carEngineCapacity) ,
    year: parseInt(carYear) , price: parseInt(carPrice), imageUrl: carImageUrl, description: carDescription});

    this.state = {
        make: this.props.car.make, 
        model: this.props.car.model ,
         color: this.props.car.color ,
          engineCapacity: this.props.car.engineCapacity ,
           year: this.props.car.year ,
            price: this.props.car.price ,
             imageUrl: this.props.car.imageUrl ,
              description: this.props.car.description};
  }
  render() {
    return (
      <form onSubmit={this.onClickEdit}>
           <p>
                <input type="text"
                       placeholder="Make"
                       value={this.state.make}
                       onChange={this.onMakeChange}/>
            </p>
          <p>
              <input type="text"
                     placeholder="Model"
                     value={this.state.model}
                     onChange={this.onModelChange}/>
          </p>
          <p>
              <input type="text"
                     placeholder="Color"
                     value={this.state.color}
                     onChange={this.onColorChange}/>
          </p>
          <p>
              <input type="number"
                     placeholder="Engine Capacity"
                     value={this.state.engineCapacity}
                     onChange={this.onEngineCapacityChange}/>
          </p>
          <p>
              <input type="number"
                     placeholder="Year"
                     value={this.state.year}
                     onChange={this.onYearChange}/>
          </p>
          <p>
              <input type="number"
                     placeholder="Price"
                     value={this.state.price}
                     onChange={this.onPriceChange}/>
          </p>
          <p>
              <input type="text"
                     placeholder="Photo"
                     value={this.state.imageUrl}
                     onChange={this.onImageUrlChange}/>
          </p>
          <p>
              <input type="text"
                     placeholder="Description"
                     value={this.state.description}
                     onChange={this.onDescriptionChange}/>
          </p>
        <input type="submit" value="Сохранить" />
        <button onClick={this.onClickEdit}> Edit </button>
      </form>
    );
}
}

class CarForm extends React.Component{

  constructor(props){
      super(props);
      this.state = {make: '', model: '' , color: '' , engineCapacity: 0 , year:0 , price:0 , imageUrl: '' , description: ''};

      this.onSubmitCar = this.onSubmitCar.bind(this);
      this.onMakeChange = this.onMakeChange.bind(this);
      this.onColorChange = this.onColorChange.bind(this);
      this.onEngineCapacityChange = this.onEngineCapacityChange.bind(this);
      this.onYearChange = this.onYearChange.bind(this);
      this.onImageUrlChange = this.onImageUrlChange.bind(this);
      this.onDescriptionChange = this.onDescriptionChange.bind(this);
  }
  onMakeChange = (e) => {
      this.setState({make: e.target.value});
  }
  onModelChange = (e) => {
      this.setState({model: e.target.value});
  }
  onColorChange = (e) => {
      this.setState({color: e.target.value});
  }
  onEngineCapacityChange = (e) => {
      this.setState({engineCapacity: e.target.value});
  }
  onYearChange = (e) => {
      this.setState({year: e.target.value}); 
  }
  onPriceChange = (e) => {
      this.setState({price: e.target.value}); 
  }
  onImageUrlChange = (e) => {
      this.setState({imageUrl: e.target.value});
  }
  onDescriptionChange = (e) => {
      this.setState({description: e.target.value});
  }
  onSubmitCar(e){
      e.preventDefault();
      var carMake = this.state.make;
      var carModel = this.state.model;
      var carColor = this.state.color;
      var carEngineCapacity = this.state.engineCapacity;
      var carYear = this.state.year;
      var carPrice = this.state.price;
      var carImageUrl = this.state.imageUrl;
      var carDescription = this.state.description;
      if (!carMake || !carModel || !carColor || carEngineCapacity <= 0.2 || carYear <= 1900 && carYear > 2020 
          || carPrice < 0 || !carImageUrl) {
          return;
      }
      this.props.onCarSubmit({ make: carMake, model: carModel , color: carColor , engineCapacity: parseInt(carEngineCapacity) ,
      year: parseInt(carYear) , price: parseInt(carPrice), imageUrl: carImageUrl, description: carDescription});
      this.state = {make: "", model: "" , color: "" , engineCapacity: 0 , year:0 , price:0 , imageUrl: "" , description: ""};
  }
  render() {
      return (
        <form onSubmit={this.onSubmitCar}>
            <p>
                <input type="text"
                       placeholder="Make"
                       value={this.state.make}
                       onChange={this.onMakeChange}/>
            </p>
          <p>
              <input type="text"
                     placeholder="Model"
                     value={this.state.model}
                     onChange={this.onModelChange}/>
          </p>
          <p>
              <input type="text"
                     placeholder="Color"
                     value={this.state.color}
                     onChange={this.onColorChange}/>
          </p>
          <p>
              <input type="number"
                     placeholder="Engine Capacity"
                     value={this.state.engineCapacity}
                     onChange={this.onEngineCapacityChange}/>
          </p>
          <p>
              <input type="number"
                     placeholder="Year"
                     value={this.state.year}
                     onChange={this.onYearChange}/>
          </p>
          <p>
              <input type="number"
                     placeholder="Price"
                     value={this.state.price}
                     onChange={this.onPriceChange}/>
          </p>
          <p>
              <input type="text"
                     placeholder="Photo"
                     value={this.state.imageUrl}
                     onChange={this.onImageUrlChange}/>
          </p>
          <p>
              <input type="text"
                     placeholder="Description"
                     value={this.state.description}
                     onChange={this.onDescriptionChange}/>
          </p>
          <input type="submit" value="Сохранить" />
        </form>
      );
  }
}


class CarList extends React.Component{

  constructor(props){
      super(props);
      this.state = { cars: [] };

      this.onAddCar = this.onAddCar.bind(this);
      this.onRemoveCar = this.onRemoveCar.bind(this);
      this.onEditCar =this.onEditCar.bind(this);
  }
  // загрузка данных
  loadData() {
      var xhr = new XMLHttpRequest();
      xhr.open("post", this.props.apiUrl + "/GetAllCar", true);
      xhr.onload = function () {
          var data = JSON.parse(xhr.responseText);
          console.log(JSON.stringify(data))
          this.setState({ cars: data });
      }.bind(this);
      xhr.send();
  }
  componentDidMount() {
      this.loadData();
  }
  // добавление объекта
  onAddCar(car) {
      if (car) {
          var url = this.props.apiUrl + "/CreateCar" ;
         console.log(car);
        axios.post(url , car , {
            headers: { 
                       'Content-Type': 'application/json' },
        }).then((response) => {
            console.log(response);
            this.loadData();
        }).catch(function (response){
            console.log(response);
        });
      }
  }
  // удаление объекта
  onRemoveCar(car) {

      if (car) {
          var url = this.props.apiUrl + "/DeleteCar" ;
          console.log(car.id);
          axios.post(url  , car.id , {
             headers: { 'Content-Type': 'multipart/form-data' },
          }).then((response) => {
              console.log(response);
              this.loadData();
          }, (error) => {
              console.log(error);
          });
      }
  }
  onEditCar(car) {
    if (car) {
        console.log(car);
        var url = this.props.apiUrl + "/UpdateCar" ;
       console.log(car);
      axios.post(url , car , {
          headers: { 
                     'Content-Type': 'application/json' },
      }).then((response) => {
          console.log(response);
          this.loadData();
      }).catch(function (response){
          console.log(response);
      });
    }

  }
  render(){

      var remove = this.onRemoveCar;
      var edit = this.onEditCar;
      return <div>
              <CarForm onCarSubmit={this.onAddCar} />
              <h2>List of cars</h2>
              <div>
                  {
                  this.state.cars.map(function(car){
                   
                  return <Car key={car.id} car={car} onRemove={remove} onEdit={edit} />
                  })
                  }
              </div>
      </div>;
  }
}


ReactDOM.render(
<CarList apiUrl="https://localhost:44349/api/Car" />,
document.getElementById("content"),
);