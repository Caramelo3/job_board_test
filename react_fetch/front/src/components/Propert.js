import React,{Fragment,useEffect,useState} from 'react'
// import PropertuDetail from "../Detail/PropertyDetail"
import "../CSS/Property.css"
import "materialize-css/dist/css/materialize.min.css";

const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <p className="text">
      {isReadMore ? text.slice(0, 150) : text}
      <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? "...Learn more" : " Learn less"}
      </span>
    </p>
  
  );
};

// const Propert = () => {

//         const [detail, setDetail] = useState(PropertuDetail)
function Propert() {

    const [data, setData] = useState([]);
    
        const apiGet = () => {
            fetch('../Detail/PropertyDetail')
            .then((response) => response.json())
               .then((json) => {
               console.log(json);
               setData(json);
    });
        };
    
      useEffect(() =>   {
     apiGet();
      }, [])

    return(
        <Fragment>

        <section className="property">
        
        <div className="center">
            <h3></h3>
        </div>

        <div className="row">

            {
                data.map((item)=>{
                    return(
                        
                        <div className="column">
                        <div className="single-property">
                            <div className="card">
        
                                <div className="property-thumb">
                                    <div className="property-tag"></div>
                                </div>
                               
                                <div className="property-content">
                                    <h3 key={item.id}>{item.heading}</h3>
                                    <div className="description">
                                    <ReadMore>{item.description}</ReadMore>
                                        </div>
                                    <div className="mark">
                                        <i class="fa-solid fa-location-dot"></i>
                                        <span>{item.span}</span>
                                    </div>
                                    <span className="amount">{item.amount} €/month</span>
                                </div>
        
                                <div className="property-footer">
                                    <ul>
                                        <li>
                                            <span>{item.location}</span>
                                        </li>
                                        <li>
                                        <span>{item.wt} h/week</span>
                                        </li>
                                        <li>
                                        <span>{item.contract}</span>
                                        </li>
                                    </ul>
                                </div>
        
                                </div>  
                        </div>
                    </div>
                   
                    )
                })
            }

            
        </div>

        <div className="more-property">
            <a className="property-btn" href="#">More Ads</a>
        </div>

        </section>

        </Fragment>
    )
        }

export default Propert