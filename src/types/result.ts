export interface TResultState {
  status: number
  error: boolean
  result: Result
}

export interface Result {
  username: string
  gender: string
  age: number
  email: string
  is_send: number
  conditional: Conditional[]
}

export interface Conditional {
  card: string
  title: string
  image: string
  description?: string
  percentage?: Percentage[]
  clientName?: string
  status?: StatusElement[] | Percentage
  programName?: string
  journalImage?: string
  cta?: string
  linkCta?: string
}

export interface Percentage {
  label: string
  value: string
}

export interface StatusElement {
  label?: string
  value: string
  label1?: string
  label2?: string
}
