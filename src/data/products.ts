export const products = [
  {
    code: '01',
    name: 'NVR / DVR',
    description: 'Standalone monitoring, recording, search and playback for local CCTV deployments.',
    tag: 'LOCAL / EMBEDDED',
    kind: 'Application',
  },
  {
    code: '02',
    name: 'Recorder',
    description: 'A dedicated recording server for high-throughput capture, indexing and scalable storage.',
    tag: 'RECORD SERVER',
    kind: 'Application',
  },
  {
    code: '03',
    name: 'VMS Client',
    description: 'A distributed client for live view, AI events, search and timeline playback operations.',
    tag: 'VMS / PUBLIC',
    kind: 'Application',
  },
  {
    code: 'CORE',
    name: 'CctvSubmarine Core',
    description: 'The native video technology behind recording, search, playback and media processing.',
    tag: 'CORE TECHNOLOGY',
    kind: 'Technology',
  },
] as const;
