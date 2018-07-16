const initialState = {
	userHistory: [
		{ key: 'a', id: '1' },
		{ key: 'a', id: '12' },
		{ key: 'a', id: '123' },
		{ key: 'a', id: '1234' },
		{ key: 'a', id: '12345' },
		{ key: 'a', id: '123456' },
		{ key: 'a', id: '1234567' },
		{ key: 'a', id: '12345678' },
		{ key: 'a', id: '123456789' },
		{ key: 'a', id: '987654321' },
		{ key: 'a', id: '98765432' },
		{ key: 'a', id: '9876543' },
		{ key: 'a', id: '987654' },
		{ key: 'a', id: '98765' },
		{ key: 'a', id: '9876' },
		{ key: 'a', id: '987' },
		{ key: 'a', id: '98' },
		{ key: 'a', id: '9' },
		{ key: 'a', id: '887654321' },
		{ key: 'a', id: '787654321' },
		{ key: 'a', id: '687654321' },
		{ key: 'a', id: '587654321' },
		{ key: 'a', id: '487654321' },
		{ key: 'a', id: '387654321' },
		{ key: 'a', id: '287654321' },
		{ key: 'b', id: '187654321' }
	]
};

export default (state = initialState, action) => {
	switch (action.type) {
		default:
			return state;
	}
};
