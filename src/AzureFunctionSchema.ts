/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type ServiceBusBinding =
  | {
      type?: 'serviceBusTrigger'
      direction?: 'in'
      [k: string]: any
    }
  | {
      type?: 'serviceBus'
      direction?: 'out'
      [k: string]: any
    }
export type BlobBinding =
  | {
      type?: 'blobTrigger'
      direction?: 'in'
      [k: string]: any
    }
  | {
      type?: 'blob'
      [k: string]: any
    }
export type EventHubBinding =
  | {
      type?: 'eventHubTrigger'
      direction?: 'in'
      /**
       * The event hub consumer group.
       */
      consumerGroup?: string
      /**
       * The cardinality hint for the input binding parameter (single message or array of messages).
       */
      cardinality?: 'one' | 'many'
      [k: string]: any
    }
  | {
      type?: 'eventHub'
      direction?: 'out'
      [k: string]: any
    }
export type QueueBinding =
  | {
      type?: 'queueTrigger'
      direction?: 'in'
      [k: string]: any
    }
  | {
      type?: 'queue'
      direction?: 'out'
      [k: string]: any
    }
export type HttpBinding =
  | {
      type?: 'httpTrigger'
      direction?: 'in'
      /**
       * The function HTTP route template.
       */
      route?: string
      /**
       * The type of WebHook handled by the trigger (if handling a pre-defined WebHook).
       */
      webHookType?: string
      /**
       * The function HTTP authorization level.
       */
      authLevel?: 'anonymous' | 'function' | 'admin'
      methods?: [] | ['get' | 'post' | 'delete' | 'head' | 'patch' | 'put' | 'options' | 'trace']
      [k: string]: any
    }
  | {
      type?: 'http'
      direction?: 'out'
      [k: string]: any
    }
export type MobileBinding =
  | {
      direction?: 'in'
      /**
       * This is the id for the record to retrieve.
       */
      id?: string
      [k: string]: any
    }
  | {
      direction?: 'out'
      [k: string]: any
    }
export type DocumentDBBinding =
  | {
      direction?: 'in'
      /**
       * This is the id for the record to retrieve.
       */
      id?: string
      /**
       * This is the query to run against the collection.
       */
      sqlQuery?: string
      [k: string]: any
    }
  | {
      direction?: 'out'
      /**
       * When true, your database and collection will be created automatically.
       */
      createIfNotExists?: boolean
      [k: string]: any
    }
export type TableBinding =
  | {
      direction?: 'in'
      /**
       * The number or records to retrieve.
       */
      take?: string
      /**
       * A filter expression to be applied when retrieving rows.
       */
      filter?: string
      [k: string]: any
    }
  | {
      direction?: 'out'
      [k: string]: any
    }

export interface AzureFunctionSchema {
  /**
   * If set to true, marks the function as disabled (it cannot be triggered).
   */
  disabled?: boolean
  /**
   * If set to true, the function will not be loaded, compiled, or triggered.
   */
  excluded?: boolean
  /**
   * Optional path to function script file.
   */
  scriptFile?: string
  /**
   * Optional named entry point.
   */
  entryPoint?: string
  /**
   * For C# precompiled functions only. If set to 'attributes', use WebJobs attributes to specify bindings. Otherwise, use the 'bindings' property of this function.json.
   */
  configurationSource?: 'attributes' | 'config'
  /**
   * Retry policy of function execution failures.
   */
  retry?: {
    /**
     * Retry strategy to use for retrying function executions
     */
    strategy?: 'exponentialBackoff' | 'fixedDelay'
    /**
     * The maximum number of retries allowed per function execution. -1 means to retry indefinitely.
     */
    maxRetryCount?: number
    /**
     * Value indicating the delayInterval for function execution retries when using FixedDelay strategy.
     */
    delayInterval?: string | null
    /**
     * Value indicating the minimumInterval for function execution retries when using ExponentialBackoff strategy.
     */
    minimumInterval?: string | null
    /**
     * Value indicating the maximumInterval for function execution retries when using ExponentialBackoff strategy.
     */
    maximumInterval?: string | null
    [k: string]: any
  }
  /**
   * A list of function bindings.
   */
  bindings?: (BindingBase &
    (
      | DynamicBinding
      | (
          | ServiceBusBinding
          | BlobBinding
          | ManualTriggerBinding
          | EventHubBinding
          | TimerTriggerBinding
          | QueueBinding
          | HttpBinding
          | MobileBinding
          | DocumentDBBinding
          | TableBinding
          | NotificationHubBinding
          | TwilioSmsBinding
          | SendGridBinding
        )
    ))[]
  [k: string]: any
}
export interface BindingBase {
  name: string
  type: string
  direction: 'in' | 'out' | 'inout'
  /**
   * The data type hint for the binding parameter (string, binary, or stream).
   */
  dataType?: 'string' | 'binary' | 'stream'
  [k: string]: any
}
export interface DynamicBinding {
  type?: {
    [k: string]: any
  }
  direction?: 'in' | 'out' | 'inout'
  [k: string]: any
}
export interface ManualTriggerBinding {
  type?: 'manualTrigger'
  direction?: 'in'
  [k: string]: any
}
export interface TimerTriggerBinding {
  type?: 'timerTrigger'
  direction?: 'in'
  /**
   * A cron expression of the format '{second} {minute} {hour} {day} {month} {day of week}' to specify the schedule.
   */
  schedule?: string
  /**
   * When true, your timer function will be invoked immediately after a runtime restart and on-schedule thereafter.
   */
  runOnStartup?: boolean
  /**
   * When true, schedule will be persisted to aid in maintaining the correct schedule even through restarts. Defaults to true for schedules with interval >= 1 minute.
   */
  useMonitor?: boolean
  [k: string]: any
}
export interface NotificationHubBinding {
  type?: 'notificationHub'
  direction?: 'out'
  /**
   * The tag to send the notification to.
   */
  tagExpression?: string
  /**
   * The name of the notification hub.
   */
  hubName?: string
  /**
   * The name of the app setting which contains the notification hub connection string.
   */
  connection?: string
  /**
   * The notification platform to target. Sends template notification if platform is omitted.
   */
  platform?: 'apns' | 'adm' | 'gcm' | 'wns' | 'mpns'
  [k: string]: any
}
export interface TwilioSmsBinding {
  type?: 'twilioSms'
  direction?: 'out'
  /**
   * The name of the app setting which contains your Twilio Account Sid.
   */
  accountSid?: string
  /**
   * The name of the app setting which contains your Twilio authentication token.
   */
  authToken?: string
  /**
   * The phone number the SMS text is sent to.
   */
  to?: string
  /**
   * The phone number the SMS text is sent from.
   */
  from?: string
  /**
   * Optional body of SMS text message.
   */
  body?: string
  [k: string]: any
}
export interface SendGridBinding {
  type?: 'sendGrid'
  direction?: 'out'
  /**
   * The name of the app setting which contains your SendGrid api key.
   */
  apiKey?: string
  /**
   * The email address to send to.
   */
  to?: string
  /**
   * The email address to send from.
   */
  from?: string
  /**
   * The subject of the email.
   */
  subject?: string
  /**
   * The text of the email.
   */
  text?: string
  [k: string]: any
}
