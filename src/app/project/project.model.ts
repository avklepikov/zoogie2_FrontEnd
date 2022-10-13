// Validation scheme for Project


interface Approaches {
    projectApproach: Chapter [],
    qualityApproach: Chapter [],
    riskApproach: Chapter [],
    changeApproach: Chapter [],
    communicationApproach: Chapter []
}

interface Chapter {
    title: string;
    details: string
}

interface Governance {
    approaches?: Approaches
    

}


export interface Product {
    id: string;
    parentId: string;
    title: string;
    category?: string;
    status: string;
    chapters?: Chapter []
}


interface Baselines {
    products: Product []
}

interface Versions {
    title: string;           // Project short name
    category: string;        // Active, Steering, Archive
    status: string;          // Project Status
    commentary: string;      // Commentary to version
    date: string;            // Version as of date. is it  correct type?
    governance?: Governance;
    baselines?: Baselines

}

export interface Project {
    id: string;
    title: string; /// to remove after refactoring of APPROACHES
    portfolioId: string;
    programmeId: string;
    version: Versions
    
}