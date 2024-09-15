
import React from 'react';

export const withOpenOrNot = (WrappedComponent) => {
  return (props) => {
    if (props.resData.info.avgRating > 4.0) {
      return (
        <div>
          <label className="inline-block bg-stone-400 text-white text-sm font-semibold px-3 py-1 rounded border">
            Promoted
          </label>
          <WrappedComponent {...props} />
        </div>

        
      );
    } else {
      return (
        <div>
          <WrappedComponent {...props} />
        </div>
      );
    }
  };
};
export default withOpenOrNot;