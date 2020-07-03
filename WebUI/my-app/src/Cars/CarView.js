import React from 'react';
import { Upload, message, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import axios from 'axios';

const apiUrl = 'https://localhost:44349/api/Car';
const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
        authorization: 'authorization-text',
    },
    fileName: "",
    onChange(info) {
        if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
            props.fileName = info.file.name;
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
};

class CarView extends React.Component {

    constructor(props) {
        super(props);

        this.state = { make: '', model: '', color: '', engineCapacity: 0, year: 0, price: 0, imageUrl: '', description: '' };


        this.onSubmitCar = this.onSubmitCar.bind(this);
        this.onMakeChange = this.onMakeChange.bind(this);
        this.onColorChange = this.onColorChange.bind(this);
        this.onEngineCapacityChange = this.onEngineCapacityChange.bind(this);
        this.onYearChange = this.onYearChange.bind(this);
        this.onImageUrlChange = this.onImageUrlChange.bind(this);
        this.onDescriptionChange = this.onDescriptionChange.bind(this);
    }
    onMakeChange = (e) => {
        this.setState({ make: e.target.value });
    }
    onModelChange = (e) => {
        this.setState({ model: e.target.value });
    }
    onColorChange = (e) => {
        this.setState({ color: e.target.value });
    }
    onEngineCapacityChange = (e) => {
        this.setState({ engineCapacity: e.target.value });
    }
    onYearChange = (e) => {
        this.setState({ year: e.target.value });
    }
    onPriceChange = (e) => {
        this.setState({ price: e.target.value });
    }
    onImageUrlChange = (e) => {
        this.setState({ imageUrl: e.target.value });
    }
    onDescriptionChange = (e) => {
        this.setState({ description: e.target.value });
    }
    onAddCar = (car) => {
        if (car) {
            var url = apiUrl + "/CreateCar";
            axios.post(url, car, {
                headers: {
                    'Content-Type': 'application/json'
                },
            }).then((response) => {
                console.log(response);
                this.props.history.push('/');
            }).catch(function (response) {
                console.log(response);
            });
        }
    }

    onSubmitCar(e) {
        e.preventDefault();
        console.log(props);
        var carMake = this.state.make;
        var carModel = this.state.model;
        var carColor = this.state.color;
        var carEngineCapacity = this.state.engineCapacity;
        var carYear = this.state.year;
        var carPrice = this.state.price;
        var carImageUrl = props.fileName;

        var carDescription = this.state.description;
        if (!carMake || !carModel || !carColor || carEngineCapacity <= 0.2 || (carYear <= 1900 && carYear > 2020)
            || carPrice < 0 || !carImageUrl) {
            return;
        }
        this.onAddCar({
            make: carMake, model: carModel, color: carColor, engineCapacity: parseInt(carEngineCapacity),
            year: parseInt(carYear), price: parseInt(carPrice), imageUrl: carImageUrl, description: carDescription
        });
    }
    render() {
        return (
            <div>

                <p>
                    <Input type="text" placeholder="Make" value={this.state.make}
                        onChange={this.onMakeChange} />
                </p>
                <p>
                    <Input className="inputCreate" type="text" placeholder="Model" value={this.state.model}
                        onChange={this.onModelChange} />
                </p>
                <p>
                    <Input type="text" placeholder="Color" value={this.state.color}
                        onChange={this.onColorChange} />
                </p>
                <p>
                    <Input type="number" placeholder="Engine Capacity" value={this.state.engineCapacity}
                        onChange={this.onEngineCapacityChange} />
                </p>
                <p>
                    <Input he type="number" placeholder="Year" value={this.state.year}
                        onChange={this.onYearChange} />
                </p>
                <p>
                    <Input width="20%" type="number" placeholder="Price" value={this.state.price}
                        onChange={this.onPriceChange} />
                </p>
                <p>
                    <TextArea type="text" placeholder="Description" value={this.state.description}
                        onChange={this.onDescriptionChange} />
                </p>
                <p>
                    <Upload value={this.state.imageUrl} onChange={this.onImageUrlChange} {...props}>
                        <Button>
                            <UploadOutlined /> Upload
                        </Button>
                    </Upload>
                </p>
                <Button onClick={this.onSubmitCar} className="btn btn-save" type="primary" shape="round">Save</Button>
            </div>
        );
    }
}


export default CarView;