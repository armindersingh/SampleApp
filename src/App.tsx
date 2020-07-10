import React, { Component } from 'react';
import './App.css';
import menuData from './menu-data.json';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ItemsList from './ItemsList/ItemsList';
import ItemDetails from './ItemDetails/ItemDetails';

class App extends Component<any, any> {
  recordsPerPage = 10;
  menuData1 = menuData as any;
  limitedMenuData = {} as any;
  pageNumber = 1;
  totalPages = Math.ceil(Object.entries(menuData).length / this.recordsPerPage);
  
  constructor(props:any) {
    super(props);
    let menu_data = this.getLimitedMenuData(0, this.recordsPerPage);
    this.state = { data : menu_data , pageNumber : 1, totalPages : this.totalPages}
  }

  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path='/' render={(props) => <ItemsList {...props} updatePageNumber={(val : string)=>{this.updatePageNumber(val)}}  data={{menuData : this.state.data, pageNumber : this.state.pageNumber, totalPages : this.state.totalPages}}/>}></Route>
            <Route path='/itemDetails' render={(props) => <ItemDetails {...props} handleUpdate={(updatedValue:any)=>{this.updateMenuData(updatedValue)}} />}></Route>
          </Switch>
        </Router>
      </div>
    )
  }

  getLimitedMenuData(sI: any, eI: any) {
    let returnObj = {} as any;
    let objectEntries = Object.entries(menuData);
    
    let slicedEntries = objectEntries.slice(sI, eI);
    slicedEntries.map(([key, value]) => {
      returnObj[key] = this.menuData1[key];
    });
    this.limitedMenuData = returnObj;
    return returnObj;
  }

  updateMenuData(valueToUpdate:any) {
    let menu_data = this.state.data;
    menu_data[valueToUpdate['id']]['price'] = valueToUpdate.newPrice;
    menu_data[valueToUpdate['id']]['available'] = valueToUpdate.newIsAvailable;
    this.setState({data : menu_data});
    console.log('Updated item data is: ', this.state.data)
  }

  updatePageNumber(clickType:string) {
    this.pageNumber = clickType === 'next' ? this.pageNumber + 1 : this.pageNumber - 1;
    let sI = (this.recordsPerPage * this.pageNumber) - this.recordsPerPage; 
    let eI = sI + this.recordsPerPage;
    let menu_data = this.getLimitedMenuData(sI, eI);
    this.setState({data : menu_data, pageNumber : this.pageNumber});
  }
}

export default App;
