//////////////////////////////////////////////////////////////////////////////////////
/// This file handles type definitions related to projects throughout the application.
/// e.g. DTOs, API Contracts
///
/// Domain level types/interfaces are defined in co-located "abstract" directories.
/// e.g. ~/src/components/projects/abstract
/////////////////////////////////////////////////////////////////////////////////////

export interface Project {
  id: number;
  name: string;
  description: string;
}
