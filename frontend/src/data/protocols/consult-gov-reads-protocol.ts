export interface ConsultGovReadsInterface {
  getConsultRegular: (_idImob: number) => Promise<boolean>;
  getConsultMap: (_registryRural: number) => Promise<boolean>;
}
