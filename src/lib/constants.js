const SUBMISSION_PARAMS =  "?base64_encoded=false&fields=status,stdout,stderr,language_id,compile_output&wait=true"
const CONSTANTS = {
  BASE_URL: "http://localhost:2358",
  SUBMISSION_ENDPOINT: "http://localhost:2358/submissions" + SUBMISSION_PARAMS,
  ASSEMBLY_LANGUAGE_ID: 100,
}

export default CONSTANTS;