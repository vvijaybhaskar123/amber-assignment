import React from 'react';
import '../Table/TableComponent.css'; 

const TableComponent = () => {
  return (
    <div className='table-container'>
      <div className='recent-export'>
        <h3>Recent Transactions</h3>
        <button>Export</button>
      </div>
      <div className='incoming-invoice'>
        <span className='incoming'>Incoming</span>
        <span className='invoice'>Invoice</span>
      </div>
      <table id='recent-transcations'>
        <thead >
          <tr>
            <th>Invoice id</th>
            <th>Date</th>
            <th>Description</th>
            <th>Status</th>
            <th>Descriptions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>M063592RDR2</td>
            <td>08.04.2021</td>
            <td>Code 5928MDo1</td>
            <td><button>Completed</button></td>
            <td>$2500.00</td>
          </tr>
          <tr>
          <td>M063592RDR2</td>
            <td>08.04.2021</td>
            <td>Code 5928MDo1</td>
            <td><button>Completed</button></td>
            <td>$2500.00</td>
          </tr>
          <tr>
          <td>M063592RDR2</td>
            <td>08.04.2021</td>
            <td>Code 5928MDo1</td>
            <td><button>Completed</button></td>
            <td>$2500.00</td>
          </tr>
          <tr>
          <td>M063592RDR2</td>
            <td>08.04.2021</td>
            <td>Code 5928MDo1</td>
            <td><button>Completed</button></td>
            <td>$2500.00</td>
          </tr>
          <tr>
          <td>M063592RDR2</td>
            <td>08.04.2021</td>
            <td>Code 5928MDo1</td>
            <td><button>Completed</button></td>
            <td>$2500.00</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
