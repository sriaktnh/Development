import React from 'react';
import Header from './header';
import { connect } from 'react-redux'
import map from 'lodash/map';
import filter from 'lodash/filter';
import styles from './students-summary.css';
import UpdateModal from './update-modal'

class StudentsSummary extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            isfilter:false,
            filterdData:[]
        }
    }
    onChangeHandler (e) {
        const {stdDetails} = this.props.stdDetails;
        const filterData= [];
        if(e.target.value){
        map(stdDetails, (item) =>{
            if(item.isPayed && e.target.value=='payed'){
                filterData.push(item);
            } else if((!item.isPayed) && e.target.value=='unpayed'){
                filterData.push(item)
            }
        })
    }
        if(filterData.length>0){
            this.setState({
                filterdData:filterData
            })
        }
    }
    componentDidMount() {
    const { stdDetails } = this.props.stdDetails;        
        if(stdDetails.length>0){
            this.setState({
                filterdData:stdDetails
            })
        }
    }
    searchStd(e) {
        const { stdDetails } = this.props.stdDetails;
        if(e.target.value){
            const filterData= filter(stdDetails, (item)=>item.firstname.includes(e.target.value));
            this.setState({
                filterdData:filterData
            })
        } 
    }
    render() {
        const { filterdData } = this.state;
        const renderProps = (params) => {
            {const renderstd=filterdData.map((item, i) => {
                
                return (
                    <tr styleName='styles.trContent'>
                    <td styleName={item.isPayed?'styles.payedColor':'styles.unPayedColor'}>{item.firstname}</td>
                    <td>{item.lastname}</td>
                    <td>{item.gmail}</td>
                    <td>{item.fee}</td>
                    <td>{item.address}</td>
                    <td>{item.age}</td>
                </tr>
                );
              })
              return renderstd;
            }
        }
        return(
            <div>
                <UpdateModal />
                <Header />
                <div>
                    <input type="text" placeholder='search by name' styleName='styles.searchBar' onChange={(e)=>this.searchStd(e)}/>
                    <div styleName='styles.modalLink'><span styleName='styles.linkStyle'>Add new Student</span></div>
                    <select styleName='styles.filterDropdown' onChange={(e)=> this.onChangeHandler(e)}>
                    <option value="">--Select--</option>
                        <option value="payed">payed</option>
                        <option value="unpayed">unpayed</option>
                    </select>
                </div>
                <table styleName='styles.tableContent'>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Gmail</th>
                        <th>Fee</th>
                        <th>Address</th>
                        <th>Age</th>
                    </tr>
                       {renderProps()} 
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        stdDetails: state && state.username
    }
}

export default connect(mapStateToProps, null)(StudentsSummary);