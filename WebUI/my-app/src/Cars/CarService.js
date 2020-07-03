import React, { Component } from 'react';
import axios from 'axios';
import { Table, Input, Button, Space, Modal, Popconfirm, Upload, message, Row } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';
import { UploadOutlined } from '@ant-design/icons';

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

class CarService extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            pagination: {
                current: 1,
                pageSize: 2,
            },
            loading: false,
            visible: false,
            record: [],
        };
    }
    state = {
        modal1Visible: false,
    };
    onMakeChange = (e) => {
        this.setState(
            {
                record:
                {
                    ...this.state.record,
                    make: e.target.value
                }
            });

    }
    onModelChange = (e) => {
        this.setState(
            {
                record:
                {
                    ...this.state.record,
                    model: e.target.value
                }
            }
        );
    }
    onColorChange = (e) => {
        this.setState(
            {
                record:
                {
                    ...this.state.record,
                    color: e.target.value
                }
            }
        );
    }
    onEngineCapacityChange = (e) => {
        this.setState(
            {
                record:
                {
                    ...this.state.record,
                    engineCapacity: parseFloat(e.target.value)
                }
            }
        );
    }
    onYearChange = (e) => {
        this.setState(
            {
                record:
                {
                    ...this.state.record,
                    year: parseInt(e.target.value)
                }
            }
        );
    }
    onPriceChange = (e) => {
        this.setState(
            {
                record:
                {
                    ...this.state.record,
                    price: parseFloat(e.target.value)
                }
            }
        );
    }
    onImageUrlChange = (e) => {
        this.setState(
            {
                record:
                {
                    ...this.state.record,
                    imageUrl: e.target.value
                }
            }
        );
    }
    onDescriptionChange = (e) => {
        this.setState(
            {
                record:
                {
                    ...this.state.record,
                    description: e.target.value
                }
            }
        );
    }

    getColumnSearchProps = dataIndex => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
            <div style={{ padding: 8 }}>
                <Input
                    ref={node => {
                        this.searchInput = node;
                    }}
                    type={dataIndex === "year" ? "number" : "text"}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{ width: 188, marginBottom: 8, display: 'block' }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{ width: 90 }}
                    >
                        Search
                    </Button>
                    <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
                        Reset
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
        onFilterDropdownVisibleChange: visible => {
            if (visible) {
                setTimeout(() => this.searchInput.select());
            }
        },
        render: text =>
            this.state.searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
                    searchWords={[this.state.searchText]}
                    autoEscape
                    textToHighlight={text.toString()}
                />
            ) : (
                    text
                ),
    });

    columns = [
        {
            title: 'Make',
            dataIndex: 'make',
            width: '20%',
            ...this.getColumnSearchProps('make'),
        },
        {
            title: 'Model',
            dataIndex: 'model',
            sorter: true,
            width: '20%',
            ...this.getColumnSearchProps('model'),
        },
        {
            title: 'Color',
            dataIndex: 'color',
            ...this.getColumnSearchProps('color'),
        },
        {
            title: 'Engine Capacity',
            dataIndex: 'engineCapacity',
        },
        {
            title: 'Year',
            dataIndex: 'year',
            sorter: true,
            ...this.getColumnSearchProps('year'),
        },
        {
            title: 'Price',
            dataIndex: 'price',
            sorter: true,
        },
        {
            title: 'Photo',
            dataIndex: 'imageUrl',
        },
        {
            title: 'Description',
            dataIndex: 'description',
        },
        {
            title: 'Action',
            rowKey: 'id',
            render: (text, record) =>

                this.state.data.length >= 1 ? (
                    <Row>

                        <Button type="primary"  onClick={() => this.setModal1Visible(record, true)}>
                            Edit
                        </Button>

                        <Modal 
                            title="Update Car"
                            style={{ top: 20 }}
                            visible={this.state.modal1Visible}
                            onOk={() => this.onEditCar(this.state.record, false)}
                            onCancel={() => this.setModal1Visible(false)}>

                            <p className="modal">
                                <Input type="text" placeholder="Make" defaultValue={this.state.record.make}
                                    onChange={this.onMakeChange} />
                            </p>
                            <p className="modal">
                                <Input type="text" placeholder="Model" defaultValue={this.state.record.model}
                                    onChange={this.onModelChange} />
                            </p>
                            <p className="modal">
                                <Input type="text" placeholder="Color" defaultValue={this.state.record.color}
                                    onChange={this.onColorChange} />
                            </p>
                            <p className="modal">
                                <Input type="number" placeholder="Engine Capacity" defaultValue={this.state.record.engineCapacity}
                                    onChange={this.onEngineCapacityChange} />
                            </p>
                            <p className="modal">
                                <Input type="number" placeholder="Year" defaultValue={this.state.record.year}
                                    onChange={this.onYearChange} />
                            </p>
                            <p className="modal">
                                <Input width="20%" type="number" placeholder="Price" defaultValue={this.state.record.price}
                                    onChange={this.onPriceChange} />
                            </p>
                            <p className="modal">
                                <TextArea type="text" placeholder="Description" defaultValue={this.state.record.description}
                                    onChange={this.onDescriptionChange} />
                            </p>
                            <p className="modal">
                                <Upload defaultValue={this.state.record.imageUrl} 
                                    onChange={this.onImageUrlChange} {...props}>
                                    <Button>
                                        <UploadOutlined /> Upload
                                    </Button>
                                </Upload>
                            </p>
                        </Modal>
                        &nbsp;
                        <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(record.id)}>
                            <Button type="primary" danger >Delete</Button>
                        </Popconfirm>

                    </Row>
                ) : null,

        },

    ];

    setModal1Visible(record, modal1Visible) {
        this.setState(
            { record }
        );

        this.setState(
            { modal1Visible });
    }
    onEditCar = (record, modal1Visible) => {
        console.log(record);
        this.setState(

            { modal1Visible });

        if (record) {
            console.log(record);
            var url = apiUrl + "/UpdateCar";
            axios.post(url, record, {
                headers: {
                    'Content-Type': 'application/json'
                },
            }).then((response) => {
                console.log(response);
                this.reloadData();
                this.props.history.push('/');
            }).catch(function (response) {
                console.log(response);
            });
        }
    }
    handleDelete = key => {
        console.log(key);
        this.onRemoveCar(key);
    };
    reloadData() {
        this.fetch(this.state);
    }
    componentDidMount() {
        const { pagination } = this.state;
        this.fetch({ pagination });
    }

    handleTableChange = (pagination, filters, sorter) => {
        this.fetch({
            sortField: sorter.field,
            sortOrder: sorter.order,
            pagination,
            ...filters,
        });
    };
    handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
    };

    handleReset = clearFilters => {
        clearFilters();
        this.setState({ searchText: '' });
    };

    fetch = (params = {}) => {
        var request = {
            "filter": {
                "make": params.make ? params.make[0] : null,
                "model": params.model ? params.model[0] : null,
                "color": params.color ? params.color[0] : null,
                "year": params.year ? parseInt(params.year[0]) : 0,
            },
            "sort": {
                "sortBy": params.sortField,
                "order": params.sortOrder
            },
            "pagination": {
                "page": params.pagination.current,
                "size": params.pagination.pageSize
            }
        };
        this.setState({ loading: true });
        var self = this;
        axios.post(apiUrl + "/CarFiltering", request, {
            headers: {
                'Content-Type': 'application/json'
            },
        }).then((response) => {
            console.log("Response", response.data);
            self.setState({

                ...self.state,
                params: params,
                loading: false,
                visible: false,
                data: response.data.data,
                pagination: {
                    ...params.pagination,
                    total: response.data.totalCount,
                },
            });

        }).catch(function (response) {
            console.log(response);
        });



    };

    onRemoveCar = (id) => {
        console.log(id)
        if (id) {
            var url = apiUrl + "/DeleteCar";
            id = parseInt(id);

            const headers = {
                'Content-Type': 'application/json'
            }
            const params = {
                id: id
            }

            axios.delete(url, { headers, params }).then((response) => {
                console.log(response);
                this.reloadData();

            }, (error) => {
                console.log(error);
            });
        }
    }

    render() {
        const { pagination, loading } = this.state;
        return (
            <Table
                columns={this.columns}
                rowKey={record => record.id}
                dataSource={this.state.data}
                pagination={pagination}
                loading={loading}
                onChange={this.handleTableChange}

            />
        )
    }
}

export default CarService;
