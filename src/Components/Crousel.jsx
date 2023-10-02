import React from 'react';
import Card from './Card';
import card1 from '../Images/card1.jpg';
import card2 from '../Images/card2.jpg';
import card4 from '../Images/card4.jpg';

const Crousel = () => {
  return (
    <section class="slider">
     <div class="container-fluid mt-5 mb-5">
       <div class="row ms-5 me-5 mb-5">
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class=" row carousel-inner  ">
                            {/* First Card */}
    <div class="carousel-item active">
      <div class="row">
      <div class="col-md-3">
      <Card title="Monalisha Sen" content="HR Manager" Image={card1} imageHeight="12rem" imageWidth="12rem"/>
      </div>
      <div class="col-md-3">
      <Card title="David Alexon" content="App Developer" Image={card2} isActive={true} imageHeight="12rem" imageWidth="12rem"/>
      </div>
      <div class="col-md-3">
      <Card title="David Alexon" content="App Developer" Image={card2} imageHeight="12rem" imageWidth="12rem"/>
      </div>
       <div class="col-md-3">
      <Card title="David Alexon" content="App Developer" Image={card4} imageHeight="12rem" imageWidth="12rem"/>
      </div>
    </div>
    </div>
                            {/* Second Card */}
    <div class="carousel-item">
      <div class="row">
      <div class="col-md-3">
      <Card title="David Alexon" content="App Developer" Image={card2} isActive={true} imageHeight="12rem" imageWidth="12rem"/>
      </div>
      <div class="col-md-3">
      <Card title="David Alexon" content="App Developer" Image={card4} imageHeight="12rem" imageWidth="12rem"/>
      </div>
      <div class="col-md-3">
      <Card title="Monalisha Sen" content="HR Manager" Image={card1} imageHeight="12rem" imageWidth="12rem"/>
      </div>
      <div class="col-md-3">
      <Card title="Monalisha Sen" content="HR Manager" Image={card1} imageHeight="12rem" imageWidth="12rem"/>
      </div>
    </div>
    </div>
                              
      <div class="carousel-item">
      <div class="row">
      <div class="col-md-3">
      <Card title="Monalisha Sen" content="HR Manager" Image={card1} imageHeight="12rem" imageWidth="12rem"/>
      </div>
      <div class="col-md-3">
      <Card title="David Alexon" content="App Developer" Image={card4} imageHeight="12rem" imageWidth="12rem"/>
      </div>
      <div class="col-md-3">
      <Card title="David Alexon" content="App Developer" Image={card2} imageHeight="12rem" imageWidth="12rem"/></div>
      <div class="col-md-3">
      <Card title="David Alexon" content="App Developer" Image={card4} imageHeight="12rem" imageWidth="12rem"/>
      </div>
      
    </div>
    </div>
                               {/* Third Card */}
        <div class="carousel-item">
      <div class="row">
      <div class="col-md-3">
      <Card title="David Alexon" content="App Developer" Image={card2} imageHeight="12rem" imageWidth="12rem"/>
      </div>
      <div class="col-md-3">
      <Card title="Monalisha Sen" content="HR Manager" Image={card1} imageHeight="12rem" imageWidth="12rem"/>
      </div>
      <div class="col-md-3">
      <Card title="David Alexon" content="App Developer" Image={card4} imageHeight="12rem" imageWidth="12rem"/>
      </div>
      <div class="col-md-3">
      <Card title="Monalisha Sen" content="HR Manager" Image={card1} imageHeight="12rem" imageWidth="12rem"/>
      </div>
    </div>
    </div>
                                {/* Fourth Card */}
            <div class="carousel-item">
      <div class="row">
      <div class="col-md-3">
      <Card title="Monalisha Sen" content="HR Manager" Image={card1} imageHeight="12rem" imageWidth="12rem"/>
      </div>
      <div class="col-md-3">
      <Card title="David Alexon" content="App Developer" Image={card2} imageHeight="12rem" imageWidth="12rem"/>
      </div>
      <div class="col-md-3">
      <Card title="Monalisha Sen" content="HR Manager" Image={card4} imageHeight="12rem" imageWidth="12rem"/>
      </div>
      <div class="col-md-3">
      <Card title="Monalisha Sen" content="HR Manager" Image={card1} imageHeight="12rem" imageWidth="12rem"/>
      </div>
    </div></div>
                             {/* Fifth Card */}
    <div class="carousel-item ">
      <div class="row ">
      <div class="col-md-3">
      <Card title="David Alexon" content="App Developer" Image={card4} imageHeight="12rem" imageWidth="12rem"/>
      </div>
      <div class="col-md-3">
      <Card title="David Alexon" content="App Developer" Image={card2} imageHeight="12rem" imageWidth="12rem"/>
      </div>
      <div class="col-md-3">
      <Card title="Monalisha Sen" content="HR Manager" Image={card1} imageHeight="12rem" imageWidth="12rem"/>
      </div>
      <div class="col-md-3">
      <Card title="David Alexon" content="App Developer" Image={card4} imageHeight="12rem" imageWidth="12rem"/>
      </div>
    </div>
    </div>
 

  </div>
  <button  class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon i " ></span>
    
  </button>
  <button  class="carousel-control-next " type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon j " ></span>
    
  </button>
</div>

    </div></div>


</section>

)
}

export default Crousel