import Lottie from 'lottie-react';
import  animationData  from '../../Images/loading.json';

export const Loading = () => {
        
    return (
        <Lottie 
          style={{
              height: "500px"
          }}
          animationData={animationData}
          loop={true}
        />
    );
}
