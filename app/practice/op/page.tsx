"use client"

import NavBar from "@/components/NavBar";
import Slider from "@/components/slider";

export default function opPage(){
  
    const slides = [
        "/img1.jpeg",
        "/img2.jpeg",  
        "/img3.jpeg",
    ];


    return (
      
        <main className="p-8 bg-red-100 ">
              {/* Slider sous la navbar */}
                {/* <Slider slides={slides} /> */}
            <h1 className="text-2xl font-bold">OP Practice</h1>
            <p>Welcome to the OP practice area.</p>


             <div className="div_parent">
                <div className="item">
                    <h1>Energy Optimization Practice (OP)</h1>
                    <p>Description: <br />
                        Our Energy Optimization Practice focuses on helping organizations reduce energy consumption, 
                        improve operational efficiency, and achieve sustainability goals. Through advanced audits, 
                        renewable energy integration, and energy management systems, 
                        we deliver data-driven strategies to minimize costs and environmental impact
                    </p>
                    
                </div>

                <div className="item">
                    <h1>Renewable Energy Integration</h1>
                    <p>Description: <br />
                        Assist clients in integrating renewable energy sources such as solar, wind, and geothermal into their existing energy systems. 
                        This includes feasibility studies, system design, and implementation strategies.
                    </p>
                    <p>
                        Benefits: <br />
                        Diversified energy portfolio
                        Enhanced sustainability profile
                        Long-term cost savings
                    </p>
                </div>

                <div className="item">
                    <h1>Energy Management Systems (EMS)</h1>
                    <p>Description: <br />
                        Design and implement advanced Energy Management Systems to monitor, control, and optimize energy usage in real-time. 
                        This includes software solutions, IoT integration, and data analytics.
                    </p>
                    <p>
                        Benefits: <br />
                        Real-time energy monitoring
                        Improved operational efficiency
                        Predictive maintenance capabilities
                    </p>
                </div>
                
                <div className="item">
                    <h1>Regulatory Compliance & Incentives</h1>
                    <p>Description: <br />
                        Provide guidance on navigating energy regulations and standards. Assist clients in identifying and applying for energy efficiency incentives, rebates, and grants.
                    </p>
                    <p>
                        Benefits: <br />
                        Avoidance of regulatory penalties
                        Maximization of financial incentives
                        Enhanced corporate reputation
                    </p>
                </div>
            </div>
            
        </main>
    );
}
