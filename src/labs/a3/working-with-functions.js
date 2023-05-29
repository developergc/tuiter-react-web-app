import ArrowFunctions from "./arrow-functions";
import ES5Functions from "./es5-functions";
import ImpliedReturn from "./implied-return";
import FunctionParenthesisAndParameters from "./function-parenthesis-and-parameters";

function WorkingWithFunctions() {
  return (
      <div>
        <h3>Working With Functions</h3>
        <ES5Functions />
        <ArrowFunctions />
        <ImpliedReturn/>
        <FunctionParenthesisAndParameters/>
      </div>
  );
}

export default WorkingWithFunctions;