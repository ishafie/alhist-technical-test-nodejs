interface IStep {
  id: number;
  action: String;
  next_step_id: number | null;
}

// Loop solution
function searchData(steps: IStep[]): number[] {
  let result = [];
  let actualStep: IStep | undefined = steps.find(
    (step) => step.action === "START"
  );

  while (actualStep) {
    // @ts-ignore
    result.push(actualStep.id);
    if (actualStep.next_step_id === null) {
      return result;
    } else if (result.length > steps.length) {
        // if mistakenly we have infinite loop.
      return [];
    } else {
      //@ts-ignore
      actualStep = steps.find((step) => step.id === actualStep.next_step_id);
    }
  }

  return result;
}

const steps = [
    {id: 1, action: 'START', next_step_id: 3},
    {id: 3, action: 'BOIRE', next_step_id: 2},
    {id: 2, action: 'DORMIR', next_step_id: 5},
    {id: 5, action: 'TRAVAILLER', next_step_id: 4},
    {id: 4, action: 'JOUER', next_step_id: 9},
    {id: 6, action: 'VOYAGER', next_step_id: 7},
    {id: 7, action: 'TERMINER', next_step_id: null},
    {id: 9, action: 'TELEPHONER', next_step_id: 6}
  ]
console.log(searchData(steps));


