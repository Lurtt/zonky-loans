describe('Rating', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should display average loans amount', () => {
    cy.contains('h1', 'Choose rating').should('be.visible')
    cy.get('[data-testid=btn-rating]').first().click()
    cy.get('[data-testid=total-average-amount]').should('be.visible')
  })

  it('should work on mobile', () => {
    cy.viewport('iphone-6')
    cy.contains('h1', 'Choose rating').should('be.visible')
    cy.get('[data-testid=btn-rating]').last().click()
    cy.get('[data-testid=total-average-amount]').should('be.visible')
  })
})