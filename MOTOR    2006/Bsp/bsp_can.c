/****************************************************************************
 *  Copyright (C) 2018 RoboMaster.
 *
 *  This program is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of 
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with this program. If not, see <http://www.gnu.org/licenses/>.
 ***************************************************************************/
 
#include "bsp_can.h"
#include "bsp_led.h"

moto_info_t motor_info[MOTOR_MAX_NUM];
uint16_t can_cnt;

/**
  * @brief  init can filter, start can, enable can rx interrupt
  * @param  hcan pointer to a CAN_HandleTypeDef structure that contains
  *         the configuration information for the specified CAN.
  * @retval None
  */
void can_user_init(CAN_HandleTypeDef* hcan )
{
  CAN_FilterTypeDef  can_filter;

  can_filter.FilterBank = 0;                       
  can_filter.FilterMode =  CAN_FILTERMODE_IDMASK; 
  can_filter.FilterScale = CAN_FILTERSCALE_32BIT;
  can_filter.FilterIdHigh = 0;
  can_filter.FilterIdLow  = 0;
  can_filter.FilterMaskIdHigh = 0;
  can_filter.FilterMaskIdLow  = 0;                
  can_filter.FilterFIFOAssignment = CAN_RX_FIFO0; 
  can_filter.FilterActivation = ENABLE;           
  can_filter.SlaveStartFilterBank  = 14;         
   
  HAL_CAN_ConfigFilter(hcan, &can_filter);       
  HAL_CAN_Start(&hcan1);                         
  HAL_CAN_ActivateNotification(&hcan1, CAN_IT_RX_FIFO0_MSG_PENDING); 
}


void HAL_CAN_RxFifo0MsgPendingCallback(CAN_HandleTypeDef *hcan)
{
  CAN_RxHeaderTypeDef rx_header;
  uint8_t             rx_data[8];
  if(hcan->Instance == CAN1)
  {
    HAL_CAN_GetRxMessage(hcan, CAN_RX_FIFO0, &rx_header, rx_data); //receive can data
  }
    can_cnt ++;
    uint8_t index = rx_header.StdId - 0x201;                  // get motor index by can_id
    motor_info[index].rotor_angle    = ((rx_data[0] << 8) | rx_data[1]);
    motor_info[index].rotor_speed    = ((rx_data[2] << 8) | rx_data[3]);

}

void set_motor_voltage(int16_t v1, int16_t v2, int16_t v3, int16_t v4)
{
  CAN_TxHeaderTypeDef tx_header;
  uint8_t             tx_data[8];
    
  tx_header.StdId = 0x200;
  tx_header.IDE   = CAN_ID_STD;
  tx_header.RTR   = CAN_RTR_DATA;
  tx_header.DLC   = 8;

  tx_data[0] = (v1>>8)&0xff;
  tx_data[1] =    (v1)&0xff;
  tx_data[2] = (v2>>8)&0xff;
  tx_data[3] =    (v2)&0xff;
  tx_data[4] = (v3>>8)&0xff;
  tx_data[5] =    (v3)&0xff;
  tx_data[6] = (v4>>8)&0xff;
  tx_data[7] =    (v4)&0xff;
  HAL_CAN_AddTxMessage(&hcan1, &tx_header, tx_data,(uint32_t*)CAN_TX_MAILBOX0); 
}
