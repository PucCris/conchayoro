name: 'Welcome to the ConchaYOro App - deploy v2'
description: 'Greet the caller'
inputs:
  the-caller:
    description: 'Who is there'
    required: true
    default: 'World'
outputs:
  random-number:
    description: "Random number"
    value: ${{ steps.random-number-generator.outputs.random-id }}
runs:
  using: "composite"
  steps:
    - run: echo Hello ${{ inputs.the-caller }}.
      shell: bash
    - id: random-number-generator
      run: echo "::set-output name=random-id::$(echo $RANDOM)"
      shell: bash
