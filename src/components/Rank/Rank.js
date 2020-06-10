import React from 'react';

const Rank = ({name, entries}) => {
	return (
		<div>
		<div className='white f4 tc'>
		{`${name}, your current entry count is...`}
		<div className='white f2 tc'>
		 #{ entries }
		</div>
		</div>
		</div>
	); 
}
export default Rank;