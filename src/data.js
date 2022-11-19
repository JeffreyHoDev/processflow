export const categories = [
    {
        name: 'Software Development',
        path: 'software_development'
    },
    {
        name: 'IT Asset Procurement',
        path: 'it_asset_procurement'
    },
    {
        name: 'Desktop Support',
        path: 'desktop_support'
    },
    {
        name: 'System Support',
        path: 'system_support'
    },
    {
        name: 'Technical Issue Support',
        path: 'technical_issue_support'
    }
]

export const detailData = {
    "software_development": {
        "name": "Software Development Process",
        "data": [
            {
                "module": "Project Initiation",
                "submodule": [
                    "Requirements Gathering",
                    "Requirements Evaluation",
                    "Management Approval"
                ],
                "desc": "To initiate kicking off a project"
            },
            {
                "module": "Planning",
                "submodule": [
                    `Solutions Design`, 
                    `Resources Allocation`, 
                    `Management Approval`, 
                    `Customer Approval`
                ],
                "desc": "To generate best solution possible, a complete plan with approval"
            },
            {
                "module": "Execution",
                "submodule": [
                    `Procurement`, 
                    `Development`,
                    `Integration`
                ],
                "desc": "Executing tasks and achieving milestones"
            },
            {
                "module": "Review",
                "submodule": [
                    `Internal UAT`, 
                    `External UAT`
                ],
                "desc": "Review whole project for any blindspot or room to improve"
            },
            {
                "module": "Project Closure",
                "submodule": [
                    `Documentation`, 
                    `Training`, 
                    `Deployment`, 
                    `Handover To Customer`
                ],
                "desc": "Finalizing and delivering, record for future references"
            },
        ]
    },
    "it_asset_procurement": {
        "name": "IT Asset Procurement Process",
        "data": [
            {
                "module": "Procurement",
                "submodule": [
                    "Identify the need",
                    "Check the specs",
                    "Identify Vendors",
                    "Purchase Order",
                    "Management Approval",
                ],
                "desc": "Identify requirements and purpose"
            },
            {
                "module": "Use",
                "submodule": [
                    `Equipment Condition Check`, 
                    `Installation`, 
                    `Deliver`, 
                ],
                "desc": "Proper delivering and handling of asset"
            },
            {
                "module": "Disposal",
                "submodule": [
                    `Equipment Condition Check`, 
                    `Wipe`,
                    `Dispose`
                ],
                "desc": "Only trigger here when asset needed to be disposed"
            },
            {
                "module": "Return",
                "submodule": [
                    `Equipment Condition Check`, 
                    `Wipe`, 
                    `Confirmation`
                ],
                "desc": "Only trigger here when employee resign"
            }
        ]
    },
    "desktop_support": {
        "name": "Desktop Support Process",
        "data": [
            {
                "module": "Query",
                "submodule": [
                    "Raise Issue Ticket",
                    "Clarify Issue",
                    "Assign Priority",
                ],
                "desc": "Acknowledgement and initiating a follow up on the issue"
            },
            {
                "module": "Diagnostic",
                "submodule": [
                    `Check Equipment/Account`, 
                    `Troubleshoot Fault`
                ],
                "desc": "Find the root cause of the issue"
            },
            {
                "module": "Closure",
                "submodule": [
                    `Resolve Fault`, 
                    `Confirm Fault Resolution`,
                    `Close Issue Ticket`
                ],
                "desc": "Identify fault resolved and deliver back to user safe and sound" 
            }
        ]
    },
    "system_support": {
        "name": "System Support Process",
        "data": [
            {
                "module": "Initiation",
                "submodule": [
                    "Requirements Gathering",
                    "Requirements Evaluation",
                    "Management Approval",
                ],
                "desc": "Gather requirements and need, understand purpose of procuring new system"
            },
            {
                "module": "Planning",
                "submodule": [
                    `Specification Design`, 
                    `Identify Vendors`, 
                    `Management Approval`, 
                    `Customer Approval`
                ],
                "desc": "Gather specifications required and identify approaches available"
            },
            {
                "module": "Execution",
                "submodule": [
                    `Procurement`, 
                    `Installation`,
                    `Deployment`
                ],
                "desc": "Execute with selection chosen"
            },
            {
                "module": "Closure",
                "submodule": [
                    `Test`, 
                    `Deliver`
                ],
                "desc": "Commissioning and making sure equipment work as expected" 
            },
        ]
    },
    "technical_issue_support": {
        "name": "Technical Issue Support Process",
        "data": [
            {
                "module": "Query/Report",
                "submodule": [
                    "Raise Issue Ticket",
                    "Clarify Issue",
                    "Assign Priority",
                ],
                "desc": "Acknowledgement and initiate a follow up on the issue"
            },
            {
                "module": "Diagnostic",
                "submodule": [
                    `Check Equipment/Account`, 
                    `Confirm/Replicate Fault`, 
                    `Troubleshoot Fault`
                ],
                "desc": "Find root cause of the issue, PIC and possible approaches"
            },
            {
                "module": "Resolution",
                "submodule": [
                    `Resolve Fault`, 
                    `Confirm Fault Resolved`
                ],
                "desc": "Confirmation the true solution to the issue" 
            },
            {
                "module": "Closure",
                "submodule": [
                    `Close Ticket`, 
                    `Update Issue Log`
                ],
                "desc": "Finalizing and update log for future references"
            },
        ]
    },

}