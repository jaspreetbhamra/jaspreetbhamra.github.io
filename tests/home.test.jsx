import { render, screen } from '@testing-library/react'

import Home from '../src/pages/Home.jsx'

describe('Home', () => {
  it('renders the hero heading', () => {
    render(<Home />)
    expect(
      screen.getByRole('heading', { name: /hi, i'm jaspreet/i }),
    ).toBeInTheDocument()
  })
})
