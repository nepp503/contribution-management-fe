import {getConfiguration} from "./configuration"
import {ContributionControllerApi, ContributionControllerApiAddContributionRequest, ContributionControllerApiDeleteContributionRequest, ContributionControllerApiGetContributionByIdRequest, ContributionControllerApiGetContributionsByUserIdRequest, ContributionControllerApiUpdateContributionRequest} from "./generated"

export const addContribution = async (params: ContributionControllerApiAddContributionRequest) => {
  const configuration = getConfiguration()
  const api = new ContributionControllerApi(configuration)

  return (await api.addContribution(params)).data
}

export const getContribution = async (params: ContributionControllerApiGetContributionByIdRequest) => {
  const configuration = getConfiguration()
  const api = new ContributionControllerApi(configuration)

  return (await api.getContributionById(params)).data
}

export const getContributionByUser = async (params: ContributionControllerApiGetContributionsByUserIdRequest) => {
  const configuration = getConfiguration()
  const api = new ContributionControllerApi(configuration)

  return (await api.getContributionsByUserId(params)).data
}

export const deleteContribution = async (params: ContributionControllerApiDeleteContributionRequest) => {
  const configuration = getConfiguration()
  const api = new ContributionControllerApi(configuration)

  return (await api.deleteContribution(params)).data
}

export const updateContribution = async (params: ContributionControllerApiUpdateContributionRequest) => {
  const configuration = getConfiguration()
  const api = new ContributionControllerApi(configuration)

  return (await api.updateContribution(params)).data
}