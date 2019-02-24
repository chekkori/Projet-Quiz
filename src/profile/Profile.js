import React, { Component } from 'react'

export default class Profile extends Component {
  render() {
    return (
        //le dive pricipale
        <div> 
            <h3 style={{margin:'20px', paddingLeft: '8px' }}> My Profile </h3>
            {/* le dive contient le composant */}
            <div className="border border-primary" style={{margin:'30px' }}>
                {/* la premiere ligne qui contient la phot et le score et le classemnt  */}
                <div className="row" style={{margin:'30px' }}>
                    <div className="col">
                        <img className="rounded mx-auto d-block" src={require('../assets/images/th.jpg')}  style={{height: '200px', width:'200px'}} />
                    </div>
                    <div className="col order-1" style={{margin: '70px'}}>
                        <div className="row"><h3>Score</h3></div>
                        <div className="row"><h3> Classment</h3></div>
                    </div>
                    <div className="col order-12" style={{margin: '70px'}}>
                        <div className="row"><h3> 520</h3></div>
                        <div className="row"><h3> 06</h3></div>
                    </div>
                </div>
                <div className="row" style={{margin:'30px' }}>
                <div className="col">
                   <table className="table table-bordered">
                       <tr>
                           <h4>Score : 50 </h4>
                       </tr>
                       <tr>
                           <h4>Classment : 50 </h4>
                       </tr>
                       <tr>
                       <img className="rounded mx-auto d-block" src={require('../assets/images/pyt.jpg')}  style={{height: '100px', width:'100px'}} />
                       </tr>
                   </table>
                </div>
                <div className="col order-1">
                <table className="table table-bordered">
                       <tr>
                           <h4>Score : 50 </h4>
                       </tr>
                       <tr>
                           <h4>Classment : 50 </h4>
                       </tr>
                       <tr>
                       <img className="rounded mx-auto d-block" src={require('../assets/images/php.png')}  style={{height: '100px', width:'100px'}} />
                       </tr>
                   </table>
                </div>
                <div className="col order-12">
                <table className="table table-bordered">
                       <tr>
                           <h4>Score : 50 </h4>
                       </tr>
                       <tr>
                           <h4>Classment : 50 </h4>
                       </tr>
                       <tr>
                       <img className="rounded mx-auto d-block" src={require('../assets/images/jvs.png')}  style={{height: '100px', width:'100px'}} />
                       </tr>
                   </table> 
                </div>
            </div>

                {/* le dive qui contient la derniere ligne */} 
                <div className="row" style={{margin:'30px' }}>
                <div className="col">
                   <table className="table table-bordered">
                       <tr>
                           <h4>Score : 50 </h4>
                       </tr>
                       <tr>
                           <h4>Classment : 50 </h4>
                       </tr>
                       <tr>
                       <img className="rounded mx-auto d-block" src={require('../assets/images/rct.png')}  style={{height: '100px', width:'100px'}} />
                       </tr>
                   </table>
                </div>
                <div className="col order-1">
                <table className="table table-bordered">
                       <tr>
                           <h4>Score : 50 </h4>
                       </tr>
                       <tr>
                           <h4>Classment : 50 </h4>
                       </tr>
                       <tr>
                       <img className="rounded mx-auto d-block" src={require('../assets/images/html5.png')}  style={{height: '100px', width:'100px'}} />
                       </tr>
                   </table>
                </div>
                <div className="col order-12">
                <table className="table table-bordered">
                       <tr>
                           <h4>Score : 50 </h4>
                       </tr>
                       <tr>
                           <h4>Classment : 50 </h4>
                       </tr>
                       <tr>
                       <img className="rounded mx-auto d-block" src={require('../assets/images/jva.png')}  style={{height: '100px', width:'100px'}} />
                       </tr>
                   </table> 
                </div>
            </div>
            </div>
        </div>
        
    )
  }
}
