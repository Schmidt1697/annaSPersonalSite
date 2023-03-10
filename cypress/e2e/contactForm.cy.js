import cy from 'cypress';

describe('contact form display', () => {
	it('clicking "my-work" navigates to new url', () => {
		cy.visit('http://localhost:3000/my-work');
		cy.get('[data-cy="my-work"]').click();

		cy.url().should('include', '/my-work');
	});
});

// 1: find submit button and click submit
// add unique descriptor to DOM elements - go into form component and add data-cy='submit' as attribute to submit button
