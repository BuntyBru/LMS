import React from 'react';

const callMain =() =>{
    let t = {
        "status": 200,
        "msg": "Returned all groups",
        "data": {
          "groups_count": 1,
          "groups": [
            {
              "display_products": [
                {
                  "id": "b45256a6-6e20-4f62-8b65-f9197c7603f6",
                  "name": "Home Loan"
                }
              ],
              "pincodes_count": 8,
              "secondary_group_members": [],
              "display_products_count": 1,
              "primary_group_members": [
                {
                  "is_primary": true,
                  "employee_id": "761238",
                  "id": "a333fe14-c267-43d4-b100-c1e7a9436141",
                  "name": "Kartik Patel",
                  "emp_type": "Primary"
                }
              ],
              "pincodes_list": [
                {
                  "districts": [
                    {
                      "district_name": "BANGALORE RURAL",
                      "pincodes": [
                        "562164"
                      ]
                    },
                    {
                      "district_name": "BAGALKOT",
                      "pincodes": [
                        "587156"
                      ]
                    },
                    {
                      "district_name": "Bengaluru",
                      "pincodes": [
                        "560111",
                        "560113",
                        "560114",
                        "560116",
                        "560117"
                      ]
                    },
                    {
                      "district_name": "KOLAR",
                      "pincodes": [
                        "563157"
                      ]
                    }
                  ],
                  "state_name": "KARNATAKA"
                }
              ],
              "referred_branches": [],
              "manager_name": "Kewal",
              "group_name": "karnataka - region",
              "lead_sources": [
                {
                  "id": "d21cf79e-f1cb-4f2e-ab41-09de14e6f58d",
                  "name": "Consumer Lead"
                },
                {
                  "id": "575588ed-9e5f-4d38-b2d3-b57e6cd45a1c",
                  "name": "sample"
                }
              ],
              "secondary_group_members_count": 0,
              "total_members": 1,
              "manager_id": "8200b67d-5a32-48cc-a25e-b71b750c8390",
              "referred_branches_count": 0,
              "primary_group_members_count": 1,
              "lead_sources_count": 2,
              "group_id": "3eb56192-ae13-4c88-b42d-9163ef4a8c12"
            }
          ]
        }
      }

      return t;
}

export default callMain;